#!/usr/bin/python
# -*- coding: UTF-8 -*-

class Cooler(object):
  """ Various convenience methods to make things cooler."""

  def add_man(self, sentence):
    """ End a sentence with ", man!" to make it sound cooler, and
    return the result."""
    return sentence + ", man!"

  def add_42(self, n):
    return n + 42

  def boat(self, sentence):
    return "I'm on a boat!"

import zerorpc

s = zerorpc.Server(Cooler())
s.bind("tcp://0.0.0.0:4242")
s.run()
