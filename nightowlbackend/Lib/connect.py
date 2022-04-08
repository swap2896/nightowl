#!/usr/bin/python
import traceback

import psycopg2
from configparser import ConfigParser


class connect:

    def __init__(self, archive=0):
        try:
            """ A constructor method
                Args:
                Returns:
                    success. Returns logger object 
            """
        except:
            print(traceback.format_exc())

    def confi(self,filename='D:\\nightowl\\nightowlbackend\\Configurations\\db_conf.ini', section='DBCONFIGURATION'):
        # create a parser
        parser = ConfigParser()
        # read config file
        parser.read(filename)

        # get section, default to postgresql
        db = {}
        if parser.has_section(section):
            params = parser.items(section)
            for param in params:
                db[param[0]] = param[1]
        else:
            raise Exception('Section {0} not found in the {1} file'.format(section, filename))

        return db

    def conn(self):
        """ Connect to the PostgreSQL database server """
        conn = None
        try:
            # read connection parameters
            params = self.confi()

            # connect to the PostgreSQL server
            print('Connecting to the PostgreSQL database...')
            conn = psycopg2.connect(**params)

            # create a cursor
            cur = conn.cursor()
        except (Exception, psycopg2.DatabaseError) as error:
            print(error)
        return cur

    def fetchFromDB(self, query):
        """ Fetches data from sql query.

            Args:
                 query: is a query string to execute.

            Returns:
                    data returned by the sql statement in case of success
                    1 in case of failure.
        """
        try:
            ret_value = 1
            params = self.confi()

            # connect to the PostgreSQL server
            print('Connecting to the PostgreSQL database...')
            conn = psycopg2.connect(**params)

            # create a cursor
            cur = conn.cursor()
            cur.execute(query)
            ret_value = cur.fetchall();
            conn.commit()
            conn.close()
        except:
            print(f"Failed to fetch data from database")
            print(traceback.format_exc())
        return ret_value


if __name__ == '__main__':
    obj=connect()
    q=obj.fetchFromDB("select * from books")
