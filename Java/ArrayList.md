## ArraListは「可変長配列」を使用するための仕組みです。可変長配列とは、文字通り長さ（要素数）を変更できる配列のことです。  

## ライブラリをインポートする  
import java.util.ArrayList;  
## ArrayListの宣言を行う  
ArrayList<データ型> scores = new ArrayList<データ型>();  
1. 整数(Integer)を格納するArrayListを「socre」という名称で宣言
2. ArrayListの要素を作成
3. 1を2に代入。
### 下記のように省略可 右辺にデータ型を記述せずとも動作する。  　　
ArrayList<Integer> scores = new ArrayList<>();  
## ArrayListに値を代入する  
ArrayListに要素を追加するためには、addメソッドを使用する  
記述は、add(要素として追加する値)、のように行う  
acores.add(1);  
## ArrayListから要素を取り出す  
要素を取り出す際は、getメソッドを使用する。  
記述は、get(取得したい要素のインデックス)のように行う。  
scores.get(0)
   
