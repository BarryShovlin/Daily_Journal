import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".entryLog")

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    getEntries()
    .then(() => {
        let usingJournalEntries = useJournalEntries()
        
    for (const entry of usingJournalEntries) {
        const HTMLComponent = JournalEntryComponent(entry)
        entryLog.innerHTML += HTMLComponent
}    })
}