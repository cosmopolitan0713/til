# times メソッド
指定した数値の回数だけ繰り返し処理を行えるメソッドのことです。  
timesに続けて、do~end の間に繰り返したい処理を記述します。  
# 記述方法  
数値.times do  
　繰り返す処理  
end  
  
do~endで囲まれた処理のまとまりをブロックという。  
do　の後に| 任意の変数名 |と記述することでブロック変数を定義することができます。  
# ブロック変数を使用した場合のtimesメソッドの記述方法  
数値.times do |ブロック変数|  
　繰り返す処理  
　繰り返しの回数を使う場合、ブロック変数を使用する  
end  
