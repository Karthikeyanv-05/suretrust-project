// userSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../utils/baseUrl';

const token = localStorage.getItem('token');

// Type definition for the user object
interface User {
  id: string;
  name: string;
  email: string;
  picture: string;
}

// Thunk to fetch user details
export const fetchUserDetails = createAsyncThunk(
  'user/fetchUserDetails',
  async () => {
    const response = await axios.get(`${baseUrl}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
);

// Thunk to update user details
export const updateUserDetails = createAsyncThunk(
  'user/updateUserDetails',
  async (updatedUser: User) => {
    const response = await axios.put(`${baseUrl}/api/auth/update`, updatedUser, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
);

interface UserState {
  user: any;
  id: string;
  name: string;
  email: string;
  picture: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: UserState = {
  user: '',
  id: '',
  name: '',
  email: '',
  picture: '',
  status: 'idle',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.picture = action.payload.picture;
    },
    clearUser: (state) => {
      state.id = '';
      state.name = '';
      state.email = '';
      state.picture = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const { _id, name, email, picture } = action.payload;
        state.id = _id;
        state.name = name;
        state.email = email;
        state.picture = picture;
      })
      .addCase(fetchUserDetails.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(updateUserDetails.fulfilled, (state, action) => {
        const { name, email, picture } = action.payload;
        state.name = name;
        state.email = email;
        state.picture = picture;
      });
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
