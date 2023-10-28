document.addEventListener('DOMContentLoaded', function () {
    const memeForm = document.getElementById('meme-form');
    const memeContainer = document.getElementById('meme-container');

    memeForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const image = document.getElementById('image').value;
        const topText = document.getElementById('topText').value;
        const bottomText = document.getElementById('bottomText').value;

        if (!image || (!topText && !bottomText)) {
            alert('Please fill in both an image URL and at least one text field.');
            return;
        }

        const meme = document.createElement('div');
        meme.classList.add('meme');

        // Create a single text element that contains both top and bottom text
        const textElement = document.createElement('p');
        textElement.innerText = `${topText}\n${bottomText}`;
        meme.style.backgroundImage = `url(${image})`;

        meme.appendChild(textElement);

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete Meme';
        deleteButton.addEventListener('click', function () {
            memeContainer.removeChild(meme);
        });

        meme.appendChild(deleteButton);

        memeContainer.appendChild(meme);

        document.getElementById('image').value = '';
        document.getElementById('topText').value = '';
        document.getElementById('bottomText').value = '';
    });
});
