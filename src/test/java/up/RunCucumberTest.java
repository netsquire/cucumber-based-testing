package up;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Then;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.Assert;
import org.junit.runner.RunWith;
import org.junit.runners.model.InitializationError;

import java.io.IOException;
import java.io.InputStream;
import java.net.http.HttpResponse;
import java.util.Scanner;

import static org.junit.Assert.*;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty", "html:target/cucumber"}, strict = true)
public class RunCucumberTest {

//    up.Cucumber a;
//    String dup;
//
//    @Given("^I Set A$")
//    public void setup() throws InitializationError {
//        a = new up.Cucumber("A");
//        System.out.println("A:" + a);
//    }
//
//    @When ("^Duplicate A$")
//    public void duplicateInput(){
//        dup = a.duplicate();
//    }
//
//    @Then ("^Verify double a$")
//    public void verifyPostResponse(){
//        assertNotEquals(a, dup);
//
//        assertEquals("", dup);
//        System.out.println("Something seems like this:" + dup);
//    }

}