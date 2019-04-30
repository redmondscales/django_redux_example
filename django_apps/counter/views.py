from django.shortcuts import render

# Create your views here.

def counter(request):

    return render(request, 'counter/counter.html', {
        'react_props': {
            'counter': { 
                'text_from_django': "Text Sent From Django for Counter Component"
            }, 
            'display': {
                'text_from_django': "Text Sent From Django for Display Component"
            }
        }
    })