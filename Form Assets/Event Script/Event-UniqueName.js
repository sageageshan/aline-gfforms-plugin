<script>
document.addEventListener('DOMContentLoaded', function() {
    // Get the category from the anchor inside the dd with id 'tribe-category'
    var categoryDiv = document.getElementById('tribe-category');
    if (!categoryDiv) {
        console.error('Element with id "tribe-category" not found.');
        return;
    }

    var anchor = categoryDiv.querySelector('a');
    var category = anchor ? anchor.textContent.trim() : '';
    console.log('Retrieved Category:', category);

    // Find the label for API_Category and set its value
    var labels = document.querySelectorAll('label.gfield_label');
    var apiCategoryField;

    labels.forEach(function(label) {
        if (label.textContent.trim() === 'API_Category') {
            apiCategoryField = document.getElementById(label.getAttribute('for'));
        }
    });

    if (apiCategoryField) {
        apiCategoryField.value = category; // Set the value of the input field
        apiCategoryField.setAttribute('value', category); // Also set the attribute

        // Dispatch an input event to notify any listeners
        var event = new Event('input', {
            bubbles: true,
            cancelable: true,
        });
        apiCategoryField.dispatchEvent(event);

        // Now check for community names
        var communityNameUniqueField;

        labels.forEach(function(label) {
            if (label.textContent.trim() === 'Community Name Unique') {
                communityNameUniqueField = document.getElementById(label.getAttribute('for'));
            }
        });

        if (communityNameUniqueField) {
            let communityName = '';

            if (category.includes('Lake Forest Place')) {
                communityName = 'LakeForestPlacePH';
            } else if (category.includes('Ten Twenty Grove')) {
                communityName = 'PresHomesTenTwentyGrove';
            } else if (category.includes('The Moorings')) {
                communityName = 'TheMooringsPH';
            } else if (category.includes('Westminster Place')) {
                communityName = 'WestminsterPlace';
            }

            // Set the community name if found
            if (communityName) {
                communityNameUniqueField.value = communityName; // Set the value of the input field
                communityNameUniqueField.setAttribute('value', communityName); // Also set the attribute

                // Dispatch an input event to notify any listeners
                communityNameUniqueField.dispatchEvent(event);

                console.log('Community Name Unique set to:', communityName);
            } else {
                console.log('No matching community name found.');
            }
        } else {
            console.error('Input field for "Community Name Unique" not found.');
        }
    } else {
        console.error('Input field for "API_Category" not found.');
    }
});
</script>