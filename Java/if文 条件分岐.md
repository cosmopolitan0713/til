# 条件に合わせて処理を変える
import java.util.*;  

public class Main {  
　　public static void main(String[] args) {  
　　　　Scanner scan = new Scanner(System.in);  
　　　　int number = scan.nextInt();  
　　　　System.out.println(number);  

　　　　if (number == 10) {  
　　　　　　System.out.println("Welcome");  
　　　　} else if (number > 10) {  
　　　　　　System.out.println("Good mornig");  
　　　　} else {  
　　　　　　System.out.println("Goodbye");  
　　　　}  
　　}  
}  

# 文字列が一致しているか判定する  
import java.util*;  

public class Main {  
　　public static void main(String[] args) {  
　　　　Scanner scan = new Scanner(System in);  
　　　　String name = scan.next();  
　　　　System.out.println("Hello + name");  

　　　　if (name.equals("Java")) {  
　　　　　　System.out.println("welcome");  
　　　　} else if (name.equals("JAVA")) {  
　　　　　　System.out.println("Goog morning");  
　　　　} else {  
　　　　　　System.out.println("Goodbye");  
　　　　}  
　　}  
}  

    
