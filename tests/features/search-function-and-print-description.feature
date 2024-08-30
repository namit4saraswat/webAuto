@search-function
Feature: User searches a function and print description of function

    Background:
        Given I navigate to codecept documentation site

    @URLFuntion
    Scenario: List all URL related functions
        Given I open Playwright documentation from Helper menu
        Then I list all methods including "Url" validations
        
    @CookiesFunction
    Scenario: List all Cookies related functions
        Given I open Playwright documentation from Helper menu
        Then I list all methods including "Cookie" validations

    @printFakeData
    Scenario: Print fake data test
        Given I print fake data


