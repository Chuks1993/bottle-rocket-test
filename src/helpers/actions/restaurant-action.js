export const UPDATE_RESTAURANT = 'restaurants:updateRestaurant'

export function updateRestaurant (selectedContact, selectedLocation) {
    return {
        type: UPDATE_RESTAURANT,
        payload: {
            contact: selectedContact,
            location: selectedLocation
        }
    }
}