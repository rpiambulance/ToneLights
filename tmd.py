from gmail import *
from datetime import *
import time
import pyttsx
import os
import pigpio
import requests
from auth import *

def light():

	RED_PIN   = 17
	WHITE_PIN = 22
	BLUE_PIN  = 24

	pi = pigpio.pi()

	pi.set_PWM_dutycycle(RED_PIN, 0)
	pi.set_PWM_dutycycle(BLUE_PIN, 0)
	pi.set_PWM_dutycycle(WHITE_PIN, 0)

	for x in range(0, 255):
 	    pi.set_PWM_dutycycle(WHITE_PIN, x)
	    time.sleep(0.005)

	for x in range(0, 3):
	    #Flash red and blue 3 times
	    pi.set_PWM_dutycycle(RED_PIN, 255)
	    time.sleep(.5)
	    pi.set_PWM_dutycycle(RED_PIN, 0)
	    pi.set_PWM_dutycycle(BLUE_PIN, 255)
	    time.sleep(.5)
	    pi.set_PWM_dutycycle(BLUE_PIN, 0)


	pi.set_PWM_dutycycle(BLUE_PIN, 255)

def dark():

	RED_PIN = 17
	BLUE_PIN = 22
	WHITE_PIN = 24

	pi = pigpio.pi()

	time.sleep(60) # delays for 60 seconds


	#Lights will remain on for 2 minutes, and then the system will return to the standby state

	pi.set_PWM_dutycycle(RED_PIN, 0)
	pi.set_PWM_dutycycle(BLUE_PIN, 0)
	pi.set_PWM_dutycycle(WHITE_PIN,0)

	pi.stop()

def main():

	print str(datetime.now()) + " - Waiting for calls..."
	while(True):
		try:
			g = Gmail()
			g.login(email, pwd)
			emails = g.inbox().mail(after=datetime.today() - timedelta(days=1), unread=True)
			for mail in emails:
				mail.fetch()
				print mail.body
				message = mail.body
				data = {"verification":verification,"dispatch":message}
				r = requests.post(url = url, data = data)
				# light()
				for x in range(0, 2):
					os.system('aplay ~/TL/ToneLights/Station51.wav')

					time.sleep(5)
				mail.read()
				# dark()
			g.logout()
			if(len(emails) > 0):
				print str(datetime.now()) + " - Waiting for calls..."
		except Exception as e:
			print "There was an error\n" + str(e)

if __name__ == '__main__':
	main()
