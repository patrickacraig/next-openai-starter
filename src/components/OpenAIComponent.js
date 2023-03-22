import { useState } from 'react';

const OpenAIComponent = () => {
  // set the prompt text and watch for changes
  const [prompt, setPrompt] = useState('');
  // Set the generated text and watch for changes
  const [generatedText, setGeneratedText] = useState('');

  // Send the prompt to the API and set the generated text
  const fetchGeneratedText = async () => {
    console.log(prompt);
    try {
      // fetch the generated text from the Next.js API server
      const response = await fetch('/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
      // if the response is not ok, throw an error
      if (!response.ok) {
        setGeneratedText(`Error fetching generated text: ${response.statusText}`);
      }
      // get the data from the response
      const data = await response.json();
      // if the data is not null, set the generated text
      if(data !== null){
        setGeneratedText(data.trim());
        setPrompt('');
      }
      // if there is an error, set the generated text to the error message
    } catch (error) {
      setGeneratedText('Error fetching generated text:', error.message);
    }
    
  };


  return (
    <div className="example">
      <h2>Completion Example</h2>
      <div className="prompt">
        <div>
      <label  htmlFor="prompt">Prompt:</label>
      <input
        type="text"
        id="prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      </div>
      <button onClick={fetchGeneratedText}>Generate Text</button>
      </div>
      <div className="response">
        <h3>Generated Text:</h3>
        <p>{generatedText}</p>
      </div>
    </div>
  );
};

export default OpenAIComponent;