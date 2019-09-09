import { createSelector } from 'reselect'


//state selector -> slices off user portion of state from root
const selectUser = state => state.user;

//current user
export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
);
