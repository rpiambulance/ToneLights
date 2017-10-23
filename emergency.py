import pigpio
import time



RED_PIN   = 17
WHITE_PIN = 22
BLUE_PIN  = 24

pi = pigpio.pi()

pi.set_PWM_dutycycle(RED_PIN, 0)
pi.set_PWM_dutycycle(BLUE_PIN, 0)
pi.set_PWM_dutycycle(WHITE_PIN, 0)

for x in range(0, 255):
    pi.set_PWM_dutycycle(WHITE_PIN, x)
    time.sleep(.005)

time.sleep(.5)

for x in range(0, 20): # flashes red + blue 20 times
    pi.set_PWM_dutycycle(RED_PIN, 255)
    time.sleep(.5)
    pi.set_PWM_dutycycle(RED_PIN, 0)
    pi.set_PWM_dutycycle(BLUE_PIN, 255)
    time.sleep(.5)
    pi.set_PWM_dutycycle(BLUE_PIN, 0)


pi.set_PWM_dutycycle(BLUE_PIN, 255)

#Lights will remain on for 2 minutes, and then the system will return to the standby state
time.sleep(120)

pi.set_PWM_dutycycle(RED_PIN, 0)
pi.set_PWM_dutycycle(BLUE_PIN, 0)
pi.set_PWM_dutycycle(WHITE_PIN,0)

pi.stop()
