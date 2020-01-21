package edu.mum;

import java.util.List;

public class Person {

    private String firstName;
    private Dog dog;
    private List<Dog> dogs;

    public Person(){

    }
    public Person(String firstName, Dog dog){
        this.firstName = firstName;
        this.dog = dog;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public Dog getDog() {
        return dog;
    }

    public void setDog(Dog dog) {
        this.dog = dog;
    }

}

