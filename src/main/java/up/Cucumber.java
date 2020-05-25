package up;

public class Cucumber {

    private String value;

    public Cucumber(String value) {
        this.value = value;
    }

    String duplicate(){
        return value + "|" + value;
    }
}
