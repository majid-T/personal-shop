from django.shortcuts import render

posts = [
    {
        'author':'Majid',
        'title': 'myBlog',
        'content': 'Content of my blogiing',
        'date_posted': 'January 28, 2020'
    },
    {
        'author':'Elahe',
        'title': 'Eli Blog',
        'content': 'Content of eli blogiing',
        'date_posted': 'January 29, 2020'
    }
]

# Create your views here.
def blog(request):
    context = {
        'posts': posts
    }
    return render(request, 'blog/blog.html',context)
