export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div class="entry_date">${entry.date}</div>
            <div class="entry_concept">${entry.concept}
            <div class="entry_entry">${entry.entry}</div>
            <div class="entry_mood">${entry.mood}</div>
        </section>
    `
}
