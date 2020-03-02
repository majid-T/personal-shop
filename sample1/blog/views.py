from django.shortcuts import render
from .models import Post

# Create your views here.
def blog(request):
    context = {
        'posts': Post.objects.all(),
        'title': 'Blog home page'
    }
    return render(request, 'blog/blog.html',context)

def about(request):
    return render(request,'blog/about.html',{'title':'About'})
