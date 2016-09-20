import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BOARD)
GPIO.setup(7, GPIO.OUT)
p = GPIO.PWM(7, 50)


p.start(3)
time.sleep(.2)

print("Servo Moved Down")

p.stop()
GPIO.cleanup()
