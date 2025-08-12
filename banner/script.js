function toggleDetails(section) {
    const details = document.getElementById(`${section}-details`);
    details.classList.toggle('active');
    
    // Close other open sections
    const allSections = ['consulting', 'tech', 'beauty'];
    allSections.forEach(sec => {
        if (sec !== section) {
            document.getElementById(`${sec}-details`).classList.remove('active');
        }
    });
}