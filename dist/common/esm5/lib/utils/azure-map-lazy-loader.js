var sources = [
    {
        type: 'style',
        src: 'https://atlas.microsoft.com/sdk/css/atlas.min.css?api-version=1'
    },
    {
        type: 'script',
        src: 'https://atlas.microsoft.com/sdk/js/atlas.min.js?api-version=1'
    }
];
export function _window() {
    return window;
}
export function loadSingleAsset(source, type) {
    return new Promise(function (resolve, reject) {
        var createdElement;
        switch (type) {
            case 'script':
                createdElement = document.createElement('script');
                createdElement.src = source;
                break;
            case 'style':
                createdElement = document.createElement('link');
                createdElement.rel = 'stylesheet';
                createdElement.href = source;
                createdElement.type = 'text/css';
                break;
            default:
                reject('Wrong Type');
                break;
        }
        if (typeof (_window().atlas) !== 'undefined'
            && typeof (_window().atlas.Map) !== 'undefined') {
            resolve();
        }
        else {
            createdElement.onerror = reject;
            createdElement.onload = resolve;
            document.head.appendChild(createdElement);
        }
    });
}
export function azureMapLazyLoader() {
    return Promise.all(sources.map(function (source) { return loadSingleAsset(source.src, source.type); }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXp1cmUtbWFwLWxhenktbG9hZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGxvd2NvZGV1bml0L2xjdS1tYXBzLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9henVyZS1tYXAtbGF6eS1sb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EsSUFBTSxPQUFPLEdBQWE7SUFDdEI7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLEdBQUcsRUFBRSxpRUFBaUU7S0FDekU7SUFDRDtRQUNJLElBQUksRUFBRSxRQUFRO1FBQ2QsR0FBRyxFQUFFLCtEQUErRDtLQUN2RTtDQUNKLENBQUM7QUFFRixNQUFNLFVBQVUsT0FBTztJQUNuQixPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBSUQsTUFBTSxVQUFVLGVBQWUsQ0FBQyxNQUFjLEVBQUUsSUFBZTtJQUMzRCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDL0IsSUFBSSxjQUFjLENBQUM7UUFDbkIsUUFBUSxJQUFJLEVBQUU7WUFDVixLQUFLLFFBQVE7Z0JBQ1QsY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2xELGNBQWMsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO2dCQUM1QixNQUFNO1lBQ1YsS0FBSyxPQUFPO2dCQUNSLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNoRCxjQUFjLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQztnQkFDbEMsY0FBYyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7Z0JBQzdCLGNBQWMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO2dCQUNqQyxNQUFNO1lBQ1Y7Z0JBQ0ksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNyQixNQUFNO1NBQ2I7UUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxXQUFXO2VBQ3JDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssV0FBVyxFQUFFO1lBQ2pELE9BQU8sRUFBRSxDQUFDO1NBQ2I7YUFBTTtZQUNMLGNBQWMsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ2hDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1lBQ2hDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQzNDO0lBRUwsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQsTUFBTSxVQUFVLGtCQUFrQjtJQUM5QixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBeEMsQ0FBd0MsQ0FBQyxDQUFDLENBQUM7QUFDeEYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBTb3VyY2Uge1xyXG4gIHR5cGU6IEFzc2V0VHlwZTtcclxuICBzcmM6IHN0cmluZztcclxufVxyXG5cclxuY29uc3Qgc291cmNlczogU291cmNlW10gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogJ3N0eWxlJyxcclxuICAgICAgICBzcmM6ICdodHRwczovL2F0bGFzLm1pY3Jvc29mdC5jb20vc2RrL2Nzcy9hdGxhcy5taW4uY3NzP2FwaS12ZXJzaW9uPTEnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHR5cGU6ICdzY3JpcHQnLFxyXG4gICAgICAgIHNyYzogJ2h0dHBzOi8vYXRsYXMubWljcm9zb2Z0LmNvbS9zZGsvanMvYXRsYXMubWluLmpzP2FwaS12ZXJzaW9uPTEnXHJcbiAgICB9XHJcbl07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX3dpbmRvdygpOiBhbnkge1xyXG4gICAgcmV0dXJuIHdpbmRvdztcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQXNzZXRUeXBlID0gJ3NjcmlwdCcgfCAnc3R5bGUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTaW5nbGVBc3NldChzb3VyY2U6IHN0cmluZywgdHlwZTogQXNzZXRUeXBlKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGxldCBjcmVhdGVkRWxlbWVudDtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnc2NyaXB0JzpcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkRWxlbWVudC5zcmMgPSBzb3VyY2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc3R5bGUnOlxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkRWxlbWVudC5yZWwgPSAnc3R5bGVzaGVldCc7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkRWxlbWVudC5ocmVmID0gc291cmNlO1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEVsZW1lbnQudHlwZSA9ICd0ZXh0L2Nzcyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJlamVjdCgnV3JvbmcgVHlwZScpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgKF93aW5kb3coKS5hdGxhcykgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICAgICYmIHR5cGVvZiAoX3dpbmRvdygpLmF0bGFzLk1hcCkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY3JlYXRlZEVsZW1lbnQub25lcnJvciA9IHJlamVjdDtcclxuICAgICAgICAgIGNyZWF0ZWRFbGVtZW50Lm9ubG9hZCA9IHJlc29sdmU7XHJcbiAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGNyZWF0ZWRFbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhenVyZU1hcExhenlMb2FkZXIoKSB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoc291cmNlcy5tYXAoc291cmNlID0+IGxvYWRTaW5nbGVBc3NldChzb3VyY2Uuc3JjLCBzb3VyY2UudHlwZSkpKTtcclxufVxyXG4iXX0=