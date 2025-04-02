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
    fetchAgenda()
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