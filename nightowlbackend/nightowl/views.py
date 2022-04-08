import json
import traceback

from django.http import JsonResponse
from django.shortcuts import render
from django.db import connections
from django.db.utils import OperationalError
from django.views.decorators.csrf import csrf_exempt
from Lib.connect import connect
db_obj=connect()

@csrf_exempt
def get_all_books(request,bookid=None):
    try:
        jsonres={}
        books=[]
        if bookid==None:
            query=f"select * from books"
        else:
            query=f"select * from books where book_id='{bookid}'"
        result=db_obj.fetchFromDB(query)
        for data in result:
            res=[]
            res.append(data[0])
            res.append(data[1])
            res.append(data[2])
            res.append(data[3])
            res.append(data[4])
            res.append(data[5])
            res.append(data[6])
            res.append(data[7])
            res.append(data[8])
            res.append(data[9])
            res.append(data[10])
            books.append(res)
        jsonres['books']=books
    except:
        print(traceback.format_exc())
    jsonres = json.dumps(jsonres)
    return JsonResponse(jsonres, safe=False)

@csrf_exempt
def get_statistics(request):
    try:
        jsonres={}
        books_by_cateory=[]
        top_ten_rated_books = []
        books_by_rating=[]
        books_by_cateory_query=db_obj.fetchFromDB(f"select type,count(*) from books group by type")
        for book in books_by_cateory_query:
            temp=[]
            temp.append(book[0])
            temp.append(book[1])
            books_by_cateory.append(temp)
        jsonres['books_by_category']=books_by_cateory
        top_ten_rated_books_query=db_obj.fetchFromDB(f"select book_id,title,author,rating,type from books "
                                                     f"order by rating desc limit 10")
        for book in top_ten_rated_books_query:
            temp=[]
            temp.append(book[0])
            temp.append(book[1])
            temp.append(book[2])
            temp.append(book[3])
            top_ten_rated_books.append(temp)
        jsonres['top_ten_rated_books']=top_ten_rated_books
        books_by_rating_query=db_obj.fetchFromDB(f"select rating,count(*) from books group by rating order by rating desc")
        for book in books_by_rating_query:
            temp = []
            temp.append(book[0])
            temp.append(book[1])
            books_by_rating.append(temp)
        jsonres['books_by_rating']=books_by_rating



    except:
        print(traceback.format_exc())
    jsonres = json.dumps(jsonres)
    return JsonResponse(jsonres, safe=False)





