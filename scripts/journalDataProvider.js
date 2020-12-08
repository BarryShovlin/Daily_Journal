let journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {   id: 2,
        date: "11/18/2020",
        concept: "js functions",
        entry: "Went through Martin's Aquarium exercise and using iteration of arrays in functions to produce desired outcomes",
        mood: "nervous"

    },
    {
        id: 3,
        date: "11/19/2020",
        concept: "js functions",
        entry: "We walked through the rest of Martin's aquarium, and talked about function flow, and importing/exporting functions. We also talked about the concept of 'DRY' and importance of modules that do one task",
        mood: "happy"
    }
]
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