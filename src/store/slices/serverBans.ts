import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AppState } from "@/store/store";
import ServerBan from "@/types/ServerBan";

export const serverBansSlice = createSlice({

    name: "serverBans",

    initialState: [] as ServerBan[],

    reducers: {

        setServerBans: (_, action: PayloadAction<ServerBan[]>) => {

            return action.payload;

        }

    }

});

export const { setServerBans } = serverBansSlice.actions;

export const selectServerBans = (state: AppState) => state.serverBans;

export default serverBansSlice.reducer;
