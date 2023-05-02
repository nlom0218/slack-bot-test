import axios from 'axios';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmitMessage = async () => {
    try {
      const { data } = axios({
        method: 'post',
        url: 'https://hooks.slack.com/services/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',
        headers: {
          'Content-Type': 'application.json',
        },
        data: {
          blocks: [
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                message,
              },
            },
          ],
        },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <input
        value={message}
        onChange={handleChangeMessage}
        type="text"
        placeholder="메시지 내용을 입력"
      />
      <button type="button" onClick={handleSubmitMessage}>
        전송
      </button>
    </div>
  );
}

export default App;
