Feature: Evoly moves randomly
    Scenario: An Evoly moves randomly through a map full of grass
        Given a population with an initial count of 1 Evoli
        And a map full of grass
        When a User start a simulation
        Then Evoli has moved
