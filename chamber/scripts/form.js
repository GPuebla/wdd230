function setTimestamp() {
    let timestampField = document.getElementById('timestampField');
    let now = new Date();
    timestampField.value = now.toISOString();
  }


  window.onload = setTimestamp;