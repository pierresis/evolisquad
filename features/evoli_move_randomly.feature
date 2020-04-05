Feature: Evoly moves randomly
    Scenario: An Evoly moves randomly through a full grass map
        Given a population with an initial count of 1 Evoli
        And a full grass map
        When a User start a simulation
        Then Evoli has moved
