function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (typeof(bool) === 'boolean') {
    return true;
  }
  return false;
  // refactored solution:
  // return typeof(bool) === 'boolean';
}

booWho(null);
booWho(false);
booWho("false");