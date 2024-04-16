import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { MangaStateKey } from '@/types';
import { MangaExtensionDto } from '@/client/__generated__/graphql';

interface MangaState {
    popular: MangaExtensionDto[];
    followedCount: MangaExtensionDto[];
    latestUploaded: MangaExtensionDto[];
}

const initialState: MangaState = {
    popular: [],
    followedCount: [],
    latestUploaded: [],
};

const mangaSlice = createSlice({
    name: 'manga',
    initialState,
    reducers: {
        setMangaList(state, action: PayloadAction<{ type: MangaStateKey, mangaList: MangaExtensionDto[] }>) {
            const { type, mangaList } = action.payload;
            if (type in state) {
                state[type] = mangaList;
            }
        }
    },
});

export const { setMangaList } = mangaSlice.actions;
export default mangaSlice.reducer;
