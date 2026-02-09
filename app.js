// Your combo data - add all your combos here
const combos = [
    {
        character: 'ryu',
        drive: 3,
        meter: 2,
        starter: 'crMP',
        image: 'images/ryu_3drive_2meter_crMP.png',
        damage: '4200'
    },
    {
        character: 'ryu',
        drive: 0,
        meter: 1,
        starter: 'HP',
        image: 'images/ryu_0drive_1meter_HP.png',
        damage: '3800'
    },
    {
        character: 'ken',
        drive: 2,
        meter: 0,
        starter: 'crMK',
        image: 'images/ken_2drive_0meter_crMK.png',
        damage: '3200'
    }
];

// Get filter elements
const characterFilter = document.getElementById('character');
const driveFilter = document.getElementById('drive');
const meterFilter = document.getElementById('meter');
const starterFilter = document.getElementById('starter');
const resultsDiv = document.getElementById('results');

// Filter function
function filterCombos() {
    const selectedCharacter = characterFilter.value;
    const selectedDrive = driveFilter.value;
    const selectedMeter = meterFilter.value;
    const selectedStarter = starterFilter.value;

    // Filter the combos array
    const filtered = combos.filter(combo => {
        return (
            (selectedCharacter === '' || combo.character === selectedCharacter) &&
            (selectedDrive === '' || combo.drive === parseInt(selectedDrive)) &&
            (selectedMeter === '' || combo.meter === parseInt(selectedMeter)) &&
            (selectedStarter === '' || combo.starter === selectedStarter)
        );
    });

    displayResults(filtered);
}

// Display results
function displayResults(comboList) {
    if (comboList.length === 0) {
        resultsDiv.innerHTML = '<p class="no-results">No combos found with these filters</p>';
        return;
    }

    resultsDiv.innerHTML = comboList.map(combo => `
        <div class="combo-card">
            <img src="${combo.image}" alt="${combo.character} combo" loading="lazy">
            <div class="combo-info">
                <span>Drive: ${combo.drive}</span>
                <span>Meter: ${combo.meter}</span>
                <span>${combo.starter}</span>
                ${combo.damage ? `<span>DMG: ${combo.damage}</span>` : ''}
            </div>
        </div>
    `).join('');
}

// Add event listeners
characterFilter.addEventListener('change', filterCombos);
driveFilter.addEventListener('change', filterCombos);
meterFilter.addEventListener('change', filterCombos);
starterFilter.addEventListener('change', filterCombos);

// Initial display - show all combos on load
displayResults(combos);
