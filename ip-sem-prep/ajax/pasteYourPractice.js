document.getElementById('loadFileBtn').addEventListener('click', function() {
    // Path to your text file
    var filePath = 'path/to/your/file.txt';
  
    // Use the Fetch API to make the request
    fetch(filePath)
      .then(response => {
        // Check if the request was successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Return the response text
        return response.text();
      })
      .then(data => {
        // Display the content of the text file
        document.getElementById('output').innerHTML = data;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  