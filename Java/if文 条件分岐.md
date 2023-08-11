class Main {  
　public static void main(String[] args) {  
　　int value = 3;  

　　if (value > 0){  
　　　System.out.println("値は正です");  
　　}  
　}  
}  

## if分の使い方  
if ( 条件式 ) {  
　条件式を満たす時に実行する処理  
}  
  
## 条件に合わせて処理を変える
import java.util.*;  

## else、else ifの使い方  
class Main {  
　public static void main(String[] args) {  
　　int value = 3;  
　　if (value > 0){  
　　　System.out.println("値は正です");  
　　}else if (value < 0){  
　　　System.out.println("値は負です");   
　　}else {  
　　　System.out.println("値は0です");   
　　}  
　}  
}  

if (条件A) {  
　// 処理A  
} else if () {  
　// 処理B  
} else {  
　// 処理C  
}  
  
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

## 文字列が一致しているか判定する  
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

    
