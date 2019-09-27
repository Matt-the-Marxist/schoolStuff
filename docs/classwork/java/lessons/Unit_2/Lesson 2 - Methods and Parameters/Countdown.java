public class Countdown
{
    public static void main(String[] args) {
        run();
    }
    
    public static void run()
    {
        countdownFrom(10, 5);
    }
    
    private static void countdownFrom(int start, int stop)
    {
        for(int i = start;i>=stop;i--){
            System.out.println(i);
        }
    }
}