#!/usr/bin/env python3.5
import tornado
import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web
import os
import motor.motor_tornado
import pprint
import json
db = motor.motor_tornado.MotorClient().test_database

class MainHandler(tornado.web.RequestHandler):
    async def get(self):
        db = self.settings['db']
        result = await db.movie.insert({"01":"Highway"})
        list = db.movie.find()
        async for document in db.movie.find():
            pprint.pprint(document)
        self.write({'id': repr(result)})
    async def post(self):
        db = self.settings['db']
        data = self.request.body
        result = await db.user.insert({"data":data})
        print(result)
application = tornado.web.Application([
    (r'/', MainHandler)
], db=db)

application.listen(8888)
tornado.ioloop.IOLoop.instance().start()
