let journal = []
const eventHub = document.querySelector(".container")
/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

export const getEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(response => response.json())  
        .then(parsedjournal => {
            journal = parsedjournal
        })
}

const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}

export const saveJournalEntry = (newJournalEntry) => {
    fetch("http://localhost:8088/entries", {
    method: "POST",
    headers: { 
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newJournalEntry)
    
})
.then(getEntries())
.then(dispatchStateChangeEvent())
}
