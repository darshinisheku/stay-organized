document.addEventListener("DOMContentLoaded", function() {
    // Create the accordion container
    const accordion = document.createElement('div');
    accordion.id = 'accordion';
    document.body.appendChild(accordion);

    // Data for accordion sections
    const accordionData = [
        { header: 'Section 1', content: 'Content for section 1' },
        { header: 'Section 2', content: 'Content for section 2' }
        // Add more sections as needed
    ];

    // Create accordion items and add them to the accordion container
    accordionData.forEach(section => {
        const accordionItem = document.createElement('div');
        accordionItem.classList.add('accordion-item');
        accordion.appendChild(accordionItem);

        const header = document.createElement('div');
        header.classList.add('accordion-header');
        header.textContent = section.header;
        accordionItem.appendChild(header);

        const content = document.createElement('div');
        content.classList.add('accordion-content');
        content.textContent = section.content;
        accordionItem.appendChild(content);

        // Add event listener to toggle accordion item
        header.addEventListener('click', () => {
            accordionItem.classList.toggle('active');
        });
    });

    // CSS styles
    const style = document.createElement('style');
    style.textContent = `
        .accordion-content {
            display: none;
        }

        .accordion-item.active .accordion-content {
            display: block;
        }
    `;
    document.head.appendChild(style);
});