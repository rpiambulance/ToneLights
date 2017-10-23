import subprocess
import os
import sys
import termios
import tty
import pigpio
import time
from thread import start_new_thread


RED_PIN   = 17
WHITE_PIN = 22
BLUE_PIN  = 24

pi = pigpio.pi()

pi.set_PWM_dutycycle(BLUE_PIN, 255)
pi.set_PWM_dutycycle(WHITE_PIN, 0)
pi.set_PWM_dutycycle(RED_PIN, 0)

pi.stop()
