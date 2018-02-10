this.diff = function(oldElements, newElements) {
  var D, M, MAX, N, V, goDown, i, iRange, k, offs, path, paths, x, y, _i, _j, _k, _l, _ref;
  N = oldElements.length;
  M = newElements.length;
  MAX = M + N;
  offs = MAX + 1;
  iRange = 2 * MAX;
  V = new Array;
  paths = new Array;
  for (i = _i = 0; 0 <= iRange ? _i <= iRange : _i >= iRange; i = 0 <= iRange ? ++_i : --_i) {
    V.push(0);
  }
  for (i = _j = 0; 0 <= iRange ? _j <= iRange : _j >= iRange; i = 0 <= iRange ? ++_j : --_j) {
    paths.push('');
  }
  for (D = _k = 0; 0 <= MAX ? _k <= MAX : _k >= MAX; D = 0 <= MAX ? ++_k : --_k) {
    for (k = _l = _ref = 0 - D; _l <= D; k = _l += 2) {
      goDown = (k === (0 - D)) || ((k !== D) && (V[k - 1 + offs] < V[k + 1 + offs]));
      if (goDown) {
        x = V[k + 1 + offs];
        path = paths[k + 1 + offs].slice(0);
        y = x - k;
        if ((y > 0) && (y <= newElements.length)) {
          path += '+' + newElements[y - 1];
        }
      } else {
        x = V[k - 1 + offs] + 1;
        path = paths[k - 1 + offs].slice(0);
        if ((x > 0) && (x <= oldElements.length)) {
          path += '-' + oldElements[x - 1];
        }
      }
      y = x - k;
      while ((x < N) && (y < M) && (oldElements[x] === newElements[y])) {
        path += ' ' + newElements[y];
        x += 1;
        y += 1;
      }
      V[k + offs] = x;
      paths[k + offs] = path;
      if (x >= N && y >= M) {
        console.log('Got it:\n\t' + path);
        return path;
      }
    }
  }
};
