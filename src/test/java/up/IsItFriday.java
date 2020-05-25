package up;

public class IsItFriday {

    public static String isItFriday(String today) {
        if ("Thursday".equals(today))
            return "TGTF";

        return "Friday".equals(today)
                ? "TGIF"
                : "Nope";
    }
}
