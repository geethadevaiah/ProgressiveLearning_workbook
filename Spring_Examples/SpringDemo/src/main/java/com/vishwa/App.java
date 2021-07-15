package com.vishwa;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.stereotype.Component;

@Component
public class App {

    public static void main(String[] args) {
        ApplicationContext ac = new AnnotationConfigApplicationContext("com.vishwa");

        Person person1 = (Person) ac.getBean("person");
        Car car = (Car) ac.getBean("car");
        System.out.println(person1);
        System.out.println(car);
    }
}
