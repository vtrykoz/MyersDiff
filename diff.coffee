@diff = (oldElements, newElements) ->
    N = oldElements.length
    M = newElements.length
    MAX = M + N
    offs = MAX + 1
    iRange = 2 * MAX
    V = new Array
    paths = new Array
    
    V.push(0) for i in [0..iRange]
    paths.push('') for i in [0..iRange]
    
    for D in [0..MAX]
        for k in [(0 - D)..D] by 2
            goDown = (k == (0 - D)) || ((k != D) && (V[k - 1 + offs] < V[k + 1 + offs]))
            if goDown
                x = V[k + 1 + offs]
                path = paths[k + 1 + offs].slice(0)
                y = x - k
                if (y > 0) && (y <= newElements.length)
                    path += '+' + newElements[y - 1]
            
            else
                x = V[k - 1 + offs] + 1
                path = paths[k - 1 + offs].slice(0)
                if (x > 0) && (x <= oldElements.length)
                    path += '-' + oldElements[x - 1]
            y = x - k
            
            while (x < N) and (y < M) and (oldElements[x] == newElements[y])
                path += ' ' + newElements[y]
                x += 1
                y += 1
            
            V[k + offs] = x
            paths[k + offs] = path
            
            if x >= N and y >= M
                console.log 'Got it:\n\t' + path
                return path