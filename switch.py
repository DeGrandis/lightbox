import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BOARD)
GPIO.setup(7, GPIO.OUT)
p = GPIO.PWM(7, 50)
p.start(7.5)

time.sleep(.2)
p.ChangeDutyCycle(3.5)
print("Servo Moved Down")
time.sleep(.2)
p.ChangeDutyCycle(9.5)
print("Servo Moved Up")
time.sleep(.4)

p.stop()
GPIO.cleanup()
