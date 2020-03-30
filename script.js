console.log(`${cities.length} communes chargées`);

function ready(callback) {
  if (document.readyState != 'loading'){
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}

// insérer votre code ci-dessous
