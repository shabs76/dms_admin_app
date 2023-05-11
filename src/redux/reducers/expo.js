import { ActiveSearchConsts } from '../constant/expo';

const activeSearch = {
    mode: 'searchText',
    data: {},
};

const ActiveSearchRed = (state = activeSearch, { type, payload }) => {
    switch (type) {
    case ActiveSearchConsts.STORE_CURRENT_SEARCH:
        return {
            mode: payload.mode,
            data: payload.data,
        };

    default:
        return state;
    }
};

export default ActiveSearchRed;
