import os
import shutil

# المسار إلى مجلد الصور
covers_path = "public/images/courses/covers"

# الحصول على قائمة الملفات
files = os.listdir(covers_path)

# تصفية الملفات المكررة وترتيبها
unique_files = []
seen = set()
for file in files:
    base_name = file.split(' ')[0]  # نأخذ الاسم الأساسي قبل أي مسافات
    if base_name not in seen and file.lower().endswith(('.jpg', '.png')):
        seen.add(base_name)
        unique_files.append(file)

unique_files.sort()  # ترتيب الملفات

# إنشاء مجلد مؤقت للنسخ الاحتياطي
backup_dir = os.path.join(covers_path, "backup")
if not os.path.exists(backup_dir):
    os.makedirs(backup_dir)

# نسخ احتياطي للملفات الأصلية
for file in files:
    if file.lower().endswith(('.jpg', '.png')):
        src = os.path.join(covers_path, file)
        dst = os.path.join(backup_dir, file)
        shutil.copy2(src, dst)

# إعادة تسمية الملفات
for index, old_name in enumerate(unique_files, start=1):
    old_path = os.path.join(covers_path, old_name)
    extension = os.path.splitext(old_name)[1]
    new_name = f"course_{index:03d}{extension}"  # مثال: course_001.jpg
    new_path = os.path.join(covers_path, new_name)
    
    if os.path.exists(old_path):
        os.rename(old_path, new_path)
        print(f"Renamed: {old_name} -> {new_name}")
