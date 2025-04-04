export const fetchAgenda = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/valerieclaire96");
    let data = await response.json();

    // If the agenda doesn't exist, create it first
    if (data.detail == `Agenda "valerieclaire96" doesn't exist.`) {
        createAgenda(); // Call function to create agenda
    }

    // Dispatch the agenda data to the global state
    dispatch({
        type: "set_agenda",
        payload: { agenda: data.slug, contacts: data.contacts },
    });
}
export const createAgenda = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/valerieclaire96", {
        method: "POST",
        headers: {"Content-type": "application/json"}
    })
    let data = await response.json()
    fetchAgenda(dispatch)
}
export const getContacts = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/valerieclaire96/contacts");
    let data = await response.json();

    // Dispatch the agenda data to the global state
    dispatch({
        type: "get_contacts",
        payload: {contacts: data.contacts },
    });
}
export const createContact = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/valerieclaire96/contacts", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
            "name": payload.name,
            "phone": payload.phone,
            "email": payload.email,
            "address": payload.address
        })
    })
    getContacts(dispatch);
}
export const updateContact = async (dispatch, payload) => {
    // pass in the id
    let response = await fetch("https://playground.4geeks.com/contact/agendas/valerieclaire96/contacts/" + payload.id, {
        method: "PUT", //put update the WHOLE row meaning you have to pass in all of the rows information
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
            "name": payload.name,
            "phone": payload.phone,
            "email": payload.email,
            "address": payload.address
        })
    })
    getContacts(dispatch);
}
export const deleteContact = async (dispatch, payload) => {
    // pass in the id
    let response = await fetch("https://playground.4geeks.com/contact/agendas/test/contacts/ID", {
        method: "DELETE",
        headers: {"Content-type": "application/json"},
    })
    getContacts();
}

